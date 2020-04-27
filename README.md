# Socialmotor


Referencia endpoints


Id  |   Method  |   Path               |   Description
--- | --------- | -------------------- |  ------------------------------------------
1   |   get     | /index               | Muestra la página principal (‘index.hbs’)
2   |   get     | /about               | Muestra la página about (‘about-us.hbs’)
3   |   get     | /contact             | Muestra el formulario de contacto (‘contact-us.hbs’)
4   |   post    | /contact             | Envía un email al contacto
5   |   get     | /forum               | Muestra la página foro (‘forum-list.hbs’)
6   |   get     | /forum/create        | Formulario para crear un nuevo artículo (‘forum-create.hbs’)
7   |   post    | /forum/create        | Guarda en la BBDD los artículos creados
8   |   get     | /forum/edit/:id      | Muestra un formulario para editar el artículo (‘forum-edit.hbs’)
9   |   post    | /forum/edit/:id      | Guarda el articulo en la BBDD
10  |   get     | /forum/delete/:id    | Borra de la BBDD el artículo
11  |   get     | /cars                | Muestra una lista de coches (‘cars-list.hbs’)
12  |   get     | /cars/:id            | Muestra el detalle de cada coche (‘cars-detail.hbs’)
13  |   get     | /cars/delete/:id     | Elimina de la BBDD el coche
14  |   get     | /cars/edit/:id       | Muestra el formulario para editar un coche (‘cars-edit.hbs’)
15  |   post    | /cars/edit/:id       | Edita en la BBDD el coche
16  |   get     | /cars/create         | Formulario para crear coche (‘cars-create.hbs’)
17  |   post    | /cars/create         | Guarda el coche en la BBDD
18  |   get     | /cars/repair         | Muestra la vista de coches en reparación (‘cars-repair.hbs’)
19  |   get     | /signup              | Muestra el formulario para registrarse (‘signup.hbs’)
20  |   post    | /signup              | Registra al usuario en la BBDD
21  |   get     | /login               | Muestra el formulario para loguearse (‘login.hbs’)
22  |   post    | /login               | Loguea al usuario
23  |   get     | /profile/:id         | Muestra los datos del usuario una vez logueado (‘profile.hbs’)
24  |   get     | /profile/edit/:id     | Muestra el formulario relleno para editar los datos del usuario (‘profile-edit.hbs’)
25  |   post    | /profile/edit/:id    | Edita los datos del usuario en la BBDD
26  |   get     | /profile/delete/:id  | Elimina de la BBDD el usuario
27  |   get     | /users               | Muestra una lista de los usuarios registrados (‘users-list.hbs’)
28  |   get     | /logout              | Desloguea al usuario

