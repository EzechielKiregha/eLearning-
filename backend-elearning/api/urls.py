from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('api/institution', InstitutionViewSet, basename='institution')
router.register('api/user', UserViewSet, basename='user')
router.register('api/course', CourseViewSet, basename='course')
router.register('api/progress', ProgressViewSet, basename='progress')
router.register('api/enrollment', EnrollmentViewSet, basename='enrollment')
router.register('api/lesson', LessonViewSet, basename='lesson')
router.register('api/quiz', QuizViewSet, basename='quiz')
router.register('api/quiz-question', QuizQuestionViewSet, basename='quiz-question')
router.register('api/quiz-answer', QuizAnswerViewSet, basename='quiz-answer')
router.register('api/quiz-result', QuizResultViewSet, basename='quiz-result')
router.register('api/certification', CertificationViewSet, basename='certification')

urlpatterns = router.urls
