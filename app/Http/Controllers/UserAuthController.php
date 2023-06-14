<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\OtpEmail;
use Illuminate\Console\Command;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;

class UserAuthController extends Controller
{

    public function register(Request $request)
    {
        
        $this->validate($request, [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
        ]);

        $userdetails = [
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
        ];

        $qr_code['qrcode'] = QrCode::generate($user);

        QrCode::generate($user, public_path('qrcodes/qrcode.svg') );

        $user->qr_code = $qr_code['qrcode'];  

        $user->save();  

        auth()->login($user);
        return response()->json(['success' => true, 'message' => 'User registered successfully.']);
    }
    public function verificationmail(Request $request)
    {
        $email = $request->loginemail;
   
        $user = User::where('email', $email)->first();
        if($user){
            $otp = mt_rand(100000, 999999);
            $this->otp = $otp;
            $encode = base64_encode(sha1($otp)); 
            $mail = Mail::to($email)->send(new OtpEmail($otp));
            return response()->json([
                'success' => true, 
                'message' => 'OTP sent Successfully.',
                'user_id' => $encode,
                'email' => $email,
            ]);
        }else{
            return response()->json([
                'success' => false, 
                'message' => 'Please Sign In First.',
            ]);
        }
    }
    public function userverification(Request $request){
        $email = $request->email;
        $otp = $request->otp;
        $user_id = $request->user_id;

        $encode = base64_encode(sha1($otp)); 
        if($encode === $user_id){
            $user = User::where('email', $email)->first();
            if($user){
                Auth::login($user);
                return response()->json([
                    'message' => 'Login Successfully.',
                    'qr_code' => $user->qr_code,
                    'response' => '1'
                ]);
            }
        }else{
            return response()->json([
                'message' => 'Otp not valid.',
                'response' => '0'
            ]);
        }
    }
    public function profileEdit(Request $request, $id){
        $user = User::where('id', $id)->first();
        return view('profile.edit', compact('user'));
    }
    public function updateProfile(Request $request)
    {
        // dd($request->user_id);
        $id = $request->user_id;
        $user = User::find($id);
        
        $first_name = $request->first_name;
        $last_name = $request->last_name;
        if ($request->file('profilepic')) {

            if($user->file){
                Storage::delete($user->profile_pic); 
            }
            $file = $request->file('profilepic');
            $filename = str_replace(' ', '', $file->getClientOriginalName());
            $path = $file->storeAs('public/uploads', $filename);
            $user->profile_pic = $filename;
        }
        $user->first_name = $request->input('first_name');
        $user->last_name = $request->input('last_name');
        
        $user->save();
        
        return response()->json([
            'message' => 'Record updated successfully',
            'profile_pic' => $filename,
        ]);
    }
    public function userListing(){
        $users = User::all();
        return view('allusers', compact('users'));
    }
}
