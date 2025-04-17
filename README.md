*Hotel Management System (Django Project)*
=======================================
This is a simple Hotel Management System built using Django. It includes a basic setup with
user authentication, templating, and static file management.
Features
--------
- Django 4.2.16 project structure
- SQLite database configuration
- Custom app: hotelApp
- Static files and templates configured
- Admin panel enabled
- Timezone set to Asia/Kolkata
Getting Started
---------------
Follow the steps below to set up this project on your local machine.
### Prerequisites
- Python 3.8+
- pip (Python package installer)
- virtualenv (recommended)
### Installation
1. Clone the repository
$ git clone https://github.com//hotel-management-django.git
$ cd hotel-management-django
2. Create and activate virtual environment
$ python -m venv env
$ source env/bin/activate # On Windows: env\Scripts\activate
3. Install dependencies
$ pip install -r requirements.txt
4. Run migrations
$ python manage.py migrate
5. Run the development server
$ python manage.py runserver
6. Access the app
Open your browser and visit: http://127.0.0.1:8000
### Create Superuser (optional)
$ python manage.py createsuperuser
Project Structure
-----------------
hotel/
├── hotel/
│ ├── settings.py
│ ├── urls.py
│ ├── wsgi.py
│ └── ...
├── hotelApp/
│ ├── models.py
│ ├── views.py
│ ├── templates/
│ └── ...
├── static/
│ └── ...
├── templates/
│ └── ...
├── db.sqlite3
└── manage.py
License
-------
This project is licensed under the MIT License.
Note: This project is for learning/demo purposes. Do not use in production without proper
security and scalability considerations.
