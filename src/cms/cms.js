import CMS from 'netlify-cms-app'

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
import JoinPagePreview from './preview-templates/JoinPagePreview'
import MembersPagePreview from './preview-templates/MembersPagePreview'
import JoinIndividualPagePreview from './preview-templates/JoinIndividualPagePreview'

CMS.registerPreviewStyle('style/styles.scss');

CMS.registerPreviewStyle('style/previews.css');

CMS.registerWidget(IdWidget)
CMS.registerWidget(FileRelationWidget)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('board', BoardPagePreview)
CMS.registerPreviewTemplate('staff', StaffPagePreview)
CMS.registerPreviewTemplate('members', CompaniesPagePreview)
CMS.registerPreviewTemplate('hosting', HostingPagePreview)
CMS.registerPreviewTemplate('projects', ProjectsPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('generic-about-pages', GenericPagePreview)
CMS.registerPreviewTemplate('generic-projects-pages', GenericPagePreview)
CMS.registerPreviewTemplate('generic-membership-pages', GenericPagePreview)
CMS.registerPreviewTemplate('generic-four-open-pages', GenericPagePreview)
CMS.registerPreviewTemplate('openinfra-live-page', LivePagePreview)
CMS.registerPreviewTemplate('join', JoinPagePreview)
CMS.registerPreviewTemplate('members', MembersPagePreview)
CMS.registerPreviewTemplate('join-individual', JoinIndividualPagePreview)