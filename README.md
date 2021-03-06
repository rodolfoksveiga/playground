# Playground

Environment to learn and test new approaches in Software Development.


## Developing a minimal RESTFul App

Step-by-step to develop a simple and clean backend (**Django**) and frontend (**React** and **Redux** with **TypeScript**).

1. Create a Git repository. That can be done on the GitHub page or on your local machine. Since it's a simple step, I would rather do it on GitHub.

2. Create a local empty folder.
```bash
$ mkdir FOLDER_PATH
```

3. Change working directory to the folder created.
```bash
$ cd FOLDER_PATH
```

4. Clone the Git repository into an empty folder.
```bash
$ git clone GIT_REPOSITORY_NAME .
```

5. Create backend and frontend folders.
```bash
$ mkdir backend frontend
```


### Install Django - Backend

1. Change working directory to the backend folder.
```bash
$ cd FOLDER_PATH/backend
```

2. Install Django and some dependencies.
```bash
$ pipenv install django djangorestframework django-cors-headers
```

3. Open virtual environment.
```bash
$ pipenv shell
```

4. Register requirements.
```bash
$ pip freeze > requirements.txt
```

5. Start a project.
```bash
$ django-admin startproject PROJECT_NAME .
```

6. Migrate the changes.
```bash
$ python manage.py migrate
```


### Install React and Redux (TypeScript) - Frontend

1. Change working directory to the frontend folder.
```bash
$ cd FOLDER_PATH/frontend
```

2. Install React and Redux with Typescript.
```bash
$ yarn create react-app your-project-name --template typescript
```

3. Add some extra packages.
```bash
$ yarn add react-router-dom @types/react-router-dom react-redux @types/react-redux redux-thunk @types/redux-thunk redux-persist redux-devtools-extension axios formik yup
```

4. Remove standard files.
```bash
$ rm -rf README.md README_CRA.md src/components/* src/features src/pages/* src/index.css src/setupTests.ts src/store.ts
```

5. Clean App.tsx, index.tsx, and index.html.


### Configurate Django API - Backend

1. Open the configuration file. The configuration file is located at `FOLDER_PATH/BACKEND/PROJECT_NAME/settings.py`.

2. Define allowed hosts.
```python
ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1'
]
```

3. Add CORS Headers and Django REST Framework to the installed apps list.
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework'
]
```

4. Add CORS Headers middleware to the middleware list. Attention to the position of the `corsheaders.middleware.CorsMiddleware` in the list, it makes a difference.
```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware'
]
```

```python
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000'
]
```

6. Define default permissions for Django REST Framework initially allowing users to access to all the HTTP methods.
```python
DJANGO_RESTFRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ]
}
```

7. Move secret key to a new a file, add the file to *.gitignore*, and import the secret key to Django settings.
```python
from SECRET_FILE import SECRET_KEY
```


### Create an app and a model - Backend

1. Start an app.
```bash
$ python manage.py startapp APP_NAME
```
2. Create the models in *FOLDER_PATH/APP_NAME/models.py*.
3. Create views in *FOLDER_PATH/APP_NAME/views.py*.
4. Create a REST Framework serializer in *FOLDER_PATH/APP_NAME/serializers.py*.

