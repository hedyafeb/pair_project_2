CROWD FUNDING:

Nama Database: galang_dana_db

Table: 
1. Project
    - PK - id: INTEGER
    - name: STRING
    - description: STRING
    - target: INTEGER
    - currentAmmount: INTEGER, defaultValue: 0

2. User 
    - PK - id: INTEGER
    - name: STRING
    - email: STRING
    - password: STRING
    - role: STRING, defaultValue: 'user'
    
3. Transaction (conjunction form)
    - id
    - ProjectId as FK
    - UserId as FK
    - status: pending, approved
    - amount, defaultValue: 0


List pages:
1. homepage (list project)
2. detail project (based on :ProjectId)
2. register
3. login 
4. logout
5. add Transaction (donation by donatur)
6. add Project cuma bisa ditambah manual dari admin
7. user profile ?? donasinya apa aja
8. Notification by email
10. approval pending/approved dari admin
11. admin page 
12. share by email +share to fb

routes:
