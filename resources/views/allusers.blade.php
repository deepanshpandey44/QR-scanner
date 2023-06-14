<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>QR Scanner Login</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Styles -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" >
        <style>
            .login-form{
                background-image: linear-gradient(to right, #eecda3 , #ef629f);
            }
            .form-card{
                position: relative;
                height: 100vh;
            }
            .form-card .row{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 100%;
            }
            .form-card .card{
                background: rgba(255, 255, 255, 0.2);
            }
            .card-header{
                font-size: 1.5rem;
                font-family: 'Playfair Diaply', serif;
                font-weight: 700;
            }
            .table th,
            .table td{
                background: transparent;
                padding: .5em 1em;
            }
            .table .profile-pic{
                width: 70px;
            }
        </style>
    </head>
    <body>
        <div>
            <main class="login-form">
                <div class="container form-card">
                    <div class="row justify-content-center form-section">
                        <div class="col-md-8" id="verification">
                            <div class="card">
                                <h3 class="card-header text-center">All Users</h3>
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Profile Pic</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($users as $key => $user)
                                            <tr>
                                                <th scope="row">{{ $key + 1 }}</th>                                                
                                                <td><img id="profile_pic" src="{{ asset('storage/uploads/' . $user->profile_pic) }}" onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_1280.png'" class="profile-pic"></td>
                                                <td>{{$user->first_name}}</td>
                                                <td>{{$user->last_name}}</td>
                                                <td>{{$user->email}}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </body>
</html>
