# BOOK API

> This is API for Users to save contact's name , email and phone number 

## Create Book

> This is use to create a new user to be store in the database
- **ENDPOINT :**   `https://users-contact-api.herokuapp.com/api/v1/create-user`

- **METHOD :** `POST`

- **PARAMETERS :**
```JSON
{
    "name":"prince bassey",
    "email":"basseyprince75@gmail.com",
    "phone":"+2348035140670"
    
}
```
- Response

```JSON
    {
    "status": "success",
    "responseMessage": {
        "_id": "60950b5a505ecb00156d7c04",
        "name": "prince bassey",
        "email": "princebassey65@gmail.com",
        "phone": "+2348035140670",
        "createdAt": "2021-05-07T09:41:46.485Z",
        "updatedAt": "2021-05-07T09:41:46.485Z",
        "__v": 0
    }
}
```

## Get All Users
> This route fetch all the users in the database

- **ENDPOINT :**  `https://users-contact-api.herokuapp.com/api/v1/get-all-user`

- **METHOD :** `GET`

## Get A User By ID
> This route allows you fetch a user by providing user ID

- **ENDPOINT :** `https://users-contact-api.herokuapp.com/api/v1/get-user-by-id/:id`

- **METHOD :** `GET`

- **PARAMETERS :**
# request.params.id
{_id :60950b5a505ecb00156d7c04}

- Respponse
```JSON
{

    "status": "success",
    "responseMessage": {
        "_id": "60950b5a505ecb00156d7c04",
        "name": "prince bassey",
        "email": "princebassey65@gmail.com",
        "phone": "+2348035140670",
        "createdAt": "2021-05-07T09:41:46.485Z",
        "updatedAt": "2021-05-07T09:41:46.485Z",
        "__v": 0
    }
}
```
## Update User By ID
> This route allows you to update a particular user by ID

- **ENDPOINT :** `https://users-contact-api.herokuapp.com/api/v1/edit-user/:id`

- **METHOD :** `PUT`
# request.params.id
{_id :60950b5a505ecb00156d7c04}


## Delete User By It ID
> This allows you to delete a user using a specific user ID 
- **ENDPOINT :** `https://users-contact-api.herokuapp.com/api/v1/delete-user/:id`

- **METHOD :** `DELETE`
# request.params.id
{_id :60950b5a505ecb00156d7c04}
