export enum LearnerRole {
  LEARNER = "LEARNER",
}

export enum AdminRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum ResidencyStatus {
  MIGRANT = "MIGRANT",
  DISPLACED = "DISPLACED",
  RESIDENT = "RESIDENT",
}

export enum OrganizationType {
  UNIVERSITY = "UNIVERSITY",
  CSO = "CSO",
  TRAINING_CENTER = "TRAINING_CENTER",
  OTHER = "OTHER",
}

export enum CourseStatus {
  DRAFT = "DRAFT",
  LIVE = "LIVE",
}

export enum EnrollmentStatus {
  ACTIVE = "ACTIVE",
  DROPPED = "DROPPED",
  COMPLETED = "COMPLETED",
}

export enum SlideType {
  DOCUMENT = "DOCUMENT",
  RICH_HTML = "RICH_HTML",
  QUIZ = "QUIZ",
  SURVEY = "SURVEY",
}

export enum ContentType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  PDF = "PDF",
}

export enum QuestionType {
  SINGLE_CHOICE = "SINGLE_CHOICE",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  TRUE_FALSE = "TRUE_FALSE",
}

export enum SurveyType {
  PRE_COURSE = "PRE_COURSE",
  POST_COURSE = "POST_COURSE",
  MID_COURSE = "MID_COURSE",
}

export enum TriggerPoint {
  COURSE_START = "COURSE_START",
  COURSE_END = "COURSE_END",
  CHAPTER_START = "CHAPTER_START",
  CHAPTER_END = "CHAPTER_END",
  SPECIFIC_CHAPTER = "SPECIFIC_CHAPTER",
}

export enum QuizQuestionType {
  SINGLE_CHOICE = "SINGLE_CHOICE",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  TRUE_FALSE = "TRUE_FALSE",
}
