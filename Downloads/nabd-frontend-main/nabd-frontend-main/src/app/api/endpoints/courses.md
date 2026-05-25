import { apiClient } from "../client";
import { API_ENDPOINTS } from "../constants/endpoints";
import {
  ApiPaginatedResponseWrapper,
  ApiResponseWrapper,
} from "../types/api.types";
import {
  Chapter,
  Lesson,
  OrganizationCourse,
  ProgressTracker,
  Slide,
  EnrollmentRequest,
  SurveyResponse,
} from "../types/course.types";
import { Course } from "../types/course.types";

export class CoursesApi {
  static async getCourses(): Promise<ApiPaginatedResponseWrapper<Course>> {
    const response = await apiClient.requestPaginated<Course>(
      API_ENDPOINTS.COURSES.GET_COURSES,
      undefined,
      { method: "GET" }
    );
    return response;
  }

  static async getCourseChapters(
    courseId: number
  ): Promise<ApiResponseWrapper<Chapter[]>> {
    const response = await apiClient.requestFull<Chapter[]>(
      API_ENDPOINTS.COURSES.GET_COURSE_CHAPTERS(courseId),
      undefined,
      { method: "GET" }
    );
    return response;
  }

  static async getCourseLessons(
    courseId: number,
    chapterId: number
  ): Promise<ApiResponseWrapper<Lesson[]>> {
    const response = await apiClient.requestFull<Lesson[]>(
      API_ENDPOINTS.COURSES.GET_COURSE_LESSONS(courseId, chapterId),
      undefined,
      { method: "GET" }
    );
    return response;
  }

  static async getLessonSlides(
    courseId: number,
    chapterId: number,
    lessonId: number
  ): Promise<ApiResponseWrapper<Slide[]>> {
    const response = await apiClient.requestFull<Slide[]>(
      API_ENDPOINTS.COURSES.GET_LESSON_SLIDES(courseId, chapterId, lessonId),
      undefined,
      { method: "GET" }
    );
    return response;
  }

  static async updateLessonProgress(
    lessonId: number
  ): Promise<ApiResponseWrapper<ProgressTracker>> {
    const response = await apiClient.requestFull<ProgressTracker>(
      API_ENDPOINTS.COURSES.UPDATE_PROGRESS(lessonId),
      undefined,
      { method: "POST" }
    );
    return response;
  }
  static async getOrganizationCourses(): Promise<
    ApiResponseWrapper<OrganizationCourse[]>
  > {
    const response = await apiClient.requestFull<OrganizationCourse[]>(
      API_ENDPOINTS.COURSES.GET_ORGANIZATION_COURSES,
      undefined,
      { method: "GET" }
    );
    return response;
  }
  static async requestEnrollment(
    courseId: number | string
  ): Promise<ApiResponseWrapper<EnrollmentRequest>> {
    const response = await apiClient.requestFull<EnrollmentRequest>(
      API_ENDPOINTS.COURSES.REQUEST_ENROLLMENT,
      undefined,
      {
        method: "POST",
        body: JSON.stringify({ courseId: Number(courseId) }),
      }
    );
    return response;
  }

  static async submitSurveyResponse(
    surveyId: number,
    rating: number
  ): Promise<ApiResponseWrapper<SurveyResponse>> {
    const response = await apiClient.requestFull<SurveyResponse>(
      API_ENDPOINTS.COURSES.SUBMIT_SURVEY_RESPONSE(surveyId),
      undefined,
      { method: "POST", body: JSON.stringify({ rating }) }
    );
    return response;
  }
}
