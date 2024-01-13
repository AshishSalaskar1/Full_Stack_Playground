# JWT

### Encryption

data -> encrypt(data, private_key) -> encrypted_data
- encrypted_data cant be decrypted by anyone without private_key

### JWT
json_data -> encrypt(json_data, jwt_passkey) -> JWT
- Docs: https://jwt.io/introduction
- Anybody can decode the json which was encoded, but to verify the token it would need the jwt_passkey used while generating JWT
- General use case: You authenticate using some sign-in, then u receive a JWT. You send that JWT for all subsequent reqeusts that u make n its verified in backend and used instead of u signing in again n again 