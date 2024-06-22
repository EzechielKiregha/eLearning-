from django.contrib import admin
from .models import *

admin.site.register(Institution)
admin.site.register(User)
admin.site.register(Course)
admin.site.register(Enrollment)
admin.site.register(Lesson)
admin.site.register(Quiz)
admin.site.register(QuizQuestion)
admin.site.register(QuizResult)
admin.site.register(QuizAnswer)
admin.site.register(Certification)
