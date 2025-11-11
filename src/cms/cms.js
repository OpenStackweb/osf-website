import CMS from 'netlify-cms-app'

import './cms-utils'

import { Widget as FileRelationWidget } from '@ncwidgets/file-relation'
import { Widget as IdWidget } from '@ncwidgets/id'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import GenericPagePreview from './preview-templates/GenericPagePreview'
import BoardPagePreview from './preview-templates/BoardPagePreview'
import CompaniesPagePreview from './preview-templates/CompaniesPagePreview'
import HostingPagePreview from './preview-templates/HostingPagePreview'
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import StaffPagePreview from './preview-templates/StaffPagePreview'
import LivePagePreview from './preview-templates/LivePagePreview'
import LiveKeynotesPagePreview from './preview-templates/LiveKeynotesPagePreview'
import JoinPagePreview from './preview-templates/JoinPagePreview'
import MembersPagePreview from './preview-templates/MembersPagePreview'
import JoinIndividualPagePreview from './preview-templates/JoinIndividualPagePreview'
import UserSurveyPagePreview from './preview-templates/UserSurveyPagePreview'
import SurveyTypePreview from './preview-templates/SurveyTypePreview'
import HybridCloudPagePreview from './preview-templates/HybridCloudPagePreview'
import ElectionPagePreview from './preview-templates/ElectionPagePreview'
import ContributorsPagePreview from './preview-templates/ContributorsPagePreview'
import AnnualReportPagePreview from './preview-templates/AnnualReportPagePreview'
import ProjectsContactPagePreview from './preview-templates/ProjectsContactPagePreview'
import SummitLandingPagePreview from './preview-templates/SummitLandingPagePreview'
import OpenInfraDaysPagePreview from './preview-templates/OpenInfraDaysPagePreview'

CMS.registerPreviewStyle('style/styles.scss');
CMS.registerPreviewStyle('style/previews.css');

CMS.registerWidget(IdWidget)
CMS.registerWidget(FileRelationWidget)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('board', BoardPagePreview)
CMS.registerPreviewTemplate('staff', StaffPagePreview)
CMS.registerPreviewTemplate('member-companies', CompaniesPagePreview)
CMS.registerPreviewTemplate('hosting', HostingPagePreview)
CMS.registerPreviewTemplate('projects', ProjectsPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('generic-about-pages', GenericPagePreview)
CMS.registerPreviewTemplate('generic-projects-pages', GenericPagePreview)
CMS.registerPreviewTemplate('generic-membership-pages', GenericPagePreview)
CMS.registerPreviewTemplate('generic-four-open-pages', GenericPagePreview)
CMS.registerPreviewTemplate('openinfra-live-page', LivePagePreview)
CMS.registerPreviewTemplate('openinfra-live-keynotes-page', LiveKeynotesPagePreview)
CMS.registerPreviewTemplate('join', JoinPagePreview)
CMS.registerPreviewTemplate('members', MembersPagePreview)
CMS.registerPreviewTemplate('join-individual', JoinIndividualPagePreview)
CMS.registerPreviewTemplate('user-survey', UserSurveyPagePreview)
CMS.registerPreviewTemplate('survey-types-pages', SurveyTypePreview)
CMS.registerPreviewTemplate('hybrid-cloud-page', HybridCloudPagePreview)
CMS.registerPreviewTemplate('electionPage', ElectionPagePreview)
CMS.registerPreviewTemplate('contributors-pages', ContributorsPagePreview)
CMS.registerPreviewTemplate('annual-report-pages', AnnualReportPagePreview)
CMS.registerPreviewTemplate('projects-contact', ProjectsContactPagePreview)
CMS.registerPreviewTemplate('summit-landing-page', SummitLandingPagePreview);
CMS.registerPreviewTemplate('openinfra-days', OpenInfraDaysPagePreview)