"""
WSGI config for AyurBharat_sqlite project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application

settings_module = 'azure_project.deployment' if 'WEBSITE_HOSTNAME' in os.environ else 'azure_project.settings'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'AyurBharat_sqlite.settings')

application = get_wsgi_application()
