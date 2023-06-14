<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>QR Scanner Login</title>

        <!-- Styles -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" >
        <meta name="csrf-token" content="{{ csrf_token() }}" />

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
            .profile-pic{
                border-radius: 100%;
                height: 200px;
                width: 200px;
                object-fit: cover;
            }
        </style>      
    </head>
    <body>
        <div>
            <main class="login-form">
                <div class="container form-card">
                    <div class="row justify-content-center form-section">
                        <div class="col-md-4" id="signup">
                            <div class="card">
                                <h3 class="card-header text-center">Update User Profile</h3>
                                <div class="card-body">
                                    <form id="updateprofile" class="text-center" enctype="multipart/form-data" method="POST" >
                                        @csrf
                                        <div>
                                            <img id="profile_pic" src="{{ asset('storage/uploads/' . $user->profile_pic) }}" onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_1280.png'" class="mb-4 profile-pic">
                                        </div>
                                        <input type="text" id="user_id" name="user_id" value="{{$user->id}}" class="d-none" required>
                                        <div class="form-group mb-3">
                                            <input type="text" placeholder="First Name" id="update_first_name" class="form-control" name="first_name" value="{{$user->first_name}}" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="text" placeholder="Last Name" id="update_last_name" class="form-control" name="last_name" value="{{$user->last_name}}" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="text" placeholder="Email" id="update_email" class="form-control" name="email" value="{{$user->email}}" readonly>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="file" name="profilepic" id="update_profilepic" class="form-control">
                                        </div>
                                        <div>
                                            <div class="text-center">
                                                <button type="submit" class="primary-button">Update</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script>
            const form = document.getElementById('updateprofile');
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                // action="{{ route('profile-update',$user->id) }}"
                const formData = new FormData(form);

                axios.post('{{ route('profile-update') }}', formData)
                    .then(response => {
                        console.log(response.data);
                        alert(response.data.message)
                        document.getElementById("profile_pic").src = "{{ asset('storage/uploads/') }}" + "/" + response.data.profile_pic;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            });
        </script>
    </body>
</html>
