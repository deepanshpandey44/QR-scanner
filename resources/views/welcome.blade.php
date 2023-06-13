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
            .primary-button,
            #html5-qrcode-button-camera-permission,#html5-qrcode-button-camera-stop{
                padding: 0.45em 2em;
                border-radius: 2em;
                border: 0;
                background: #ff00185c;
                color: #fff;
            }
            #html5-qrcode-anchor-scan-type-change
            {
                text-decoration: inherit!important;
                color: black;
                padding: 10px;
            }
            #scanner-modal #reader{
                border: 0!important;
            }
            .card-header{
                font-size: 1.5rem;
                font-family: 'Playfair Diaply', serif;
                font-weight: 700;
            }
        </style>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.4/html5-qrcode.min.js" integrity="sha512-k/KAe4Yff9EUdYI5/IAHlwUswqeipP+Cp5qnrsUjTPCgl51La2/JhyyjNciztD7mWNKLSXci48m7cctATKfLlQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        
    </head>
    <body>
        <div>
            <main class="login-form">
                <div class="container form-card">
                    <div class="row justify-content-center form-section">
                        <div class="col-md-4" id="signup">
                            <div class="card">
                                <h3 class="card-header text-center">Sign Up Form</h3>
                                <div class="card-body">
                                    <form id="registrationForm">
                                        @csrf
                                        <div class="form-group mb-3">
                                            <input type="text" placeholder="First Name" id="first_name" class="form-control" name="first_name" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="text" placeholder="Last Name" id="last_name" class="form-control" name="last_name" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="text" placeholder="Email" id="email" class="form-control" name="email" required>
                                        </div>
                                        <div>
                                            <div class="text-center">
                                                <button type="submit" class="primary-button">Sign Up</button>
                                            </div>
                                            <div class="text-center mt-2">
                                                <span onclick="myFunction('login')">Click here for Login</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4" id="login">
                            <div class="card">
                                <h3 class="card-header text-center">Login Form</h3>
                                <div class="card-body">
                                    <form id="loginForm">
                                        @csrf
                                        <div class="form-group mb-3">
                                            <input type="text" placeholder="Email" id="loginemail" class="form-control" name="loginemail" required>
                                        </div>
                                        <div>
                                            <div class="text-center">
                                                <button type="submit" class="primary-button">Login</button>
                                            </div>
                                            <div class="text-center mt-2">
                                                <span onclick="myFunction('register')">Click here for Signup</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4" id="verification">
                            <div class="card">
                                <h3 class="card-header text-center">Please Enter Your OTP</h3>
                                <div class="card-body">
                                    <form id="verificationform">
                                        @csrf
                                        <div class="form-group mb-3">
                                            <input type="text" placeholder="Enter Verification Code" id="otp" class="form-control" name="otp" required>
                                        </div>
                                        <div>
                                            <div class="text-center">
                                                <button type="submit" class="primary-button">Verify</button>
                                            </div>
                                            <div class="text-center">
                                                <span onclick="myFunction('login')">Click here for Signup</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-content" id="scanner-modal">
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <h2>Please take screenshot for QR code</h2>
                                    <div  class="modal-body"  id="qrCodeScanner"> 
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <h2>Please Scan or Upload Your QR Code</h2>
                                    <div id="reader"></div>
                                    <div id="result"></div>
                                </div>
                            </div>
                      </div>
                    </div>
                </div>
            </main>
        </div>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
            $(document).ready(function() {
                document.getElementById("login").style.display = "none";
                document.getElementById("signup").style.display = "block";
                document.getElementById("verification").style.display = "none";
                document.getElementById("scanner-modal").style.display = "none";

                $('#registrationForm').submit(function(event) {
                    event.preventDefault(); 
                    $.ajax({
                        url: "{{ route('register') }}",
                        method: "POST",
                        dataType: "json",
                        data: $(this).serialize(),
                        success: function(response) {
                            alert(response.message);
                        },
                        error: function(response) {
                            alert(response.responseJSON.message);
                        }
                    });
                });
                $('#loginForm').submit(function(event) {
                    event.preventDefault(); 
                    $.ajax({
                        url: "{{ route('verificationmail') }}",
                        method: "POST",
                        dataType: "json",
                        data: $(this).serialize(),
                        success: function(response) {
                            alert(response.message);
                            document.getElementById("login").style.display = "none";
                            document.getElementById("signup").style.display = "none";
                            document.getElementById("scanner-modal").style.display = "none";
                            document.getElementById("verification").style.display = "block";

                            $('#verificationform').submit(function(event) {
                                var email = document.getElementById('loginemail').value;
                                var otp = document.getElementById('otp').value;
                                event.preventDefault(); 
                                $(this).serialize();
                                var data = {
                                    email: email,
                                    otp: otp,
                                    user_id: response.user_id,
                                };
                                $.ajax({
                                    url: "{{ route('userverification') }}",
                                    method: "POST",
                                    dataType: "json",
                                    data: data ,
                                    success: function(response) {
                                        alert(response.message);
                                        if(response.response == "1"){
                                            $('.modal-body').html(response.qr_code);
                                            document.getElementById("login").style.display = "none";
                                            document.getElementById("signup").style.display = "none";
                                            document.getElementById("scanner-modal").style.display = "block";
                                            document.getElementById("verification").style.display = "none";
                                            const parentElement = document.getElementById('qrCodeScanner');
                                            const qrCodeScanner = parentElement.querySelector('svg');
                                            console.log(qrCodeScanner);
                                            qrCodeScanner.addEventListener('scan', (event) => {
                                                console.log(event);
                                                const scannedData = event.detail;
                                                console.log(scannedData);
                                            });
                                        }else{
                                            alert('Please check your details');
                                        }
                                    },
                                    error: function(response) {
                                        alert(response.responseJSON.message);
                                    }
                                });
                            });

                        },
                        error: function(response) {
                            alert(response.responseJSON.message);
                        }
                    });
                });
            });
            function myFunction(formtype) {
                if(formtype === "login"){
                    document.getElementById("login").style.display = "block";
                    document.getElementById("signup").style.display = "none";
                    document.getElementById("verification").style.display = "none";
                    document.getElementById("scanner-modal").style.display = "none";
                }else{
                    document.getElementById("scanner-modal").style.display = "none";
                    document.getElementById("login").style.display = "none";
                    document.getElementById("verification").style.display = "none";
                    document.getElementById("signup").style.display = "block";
                }
            }
            const scanner = new Html5QrcodeScanner('reader', { 
                qrbox: {
                    width: 250,
                    height: 250,
                },  
                fps: 20, 
            });
            scanner.render(success, error);
            function success(result) {
                console.log(JSON.parse(result).id);
                window.location.href = '/profile-edit/' + JSON.parse(result).id ;            
            }
            function error(err) {
                console.error(err);
                
            }
        </script>
    </body>
</html>
