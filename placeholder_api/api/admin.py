from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import User, Post, Comment, Album, Photo, ToDo

admin.site.register(User)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Album)
admin.site.register(Photo)
admin.site.register(ToDo)