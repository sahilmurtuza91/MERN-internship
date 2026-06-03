import {
  AdminPanelSettings as AdminIcon,
  Article,
  Assessment,
  Assignment,
  Dashboard,
  Discount,
  FamilyRestroom,
  Feed,
  Group,
  Help,
  Language,
  MedicalServices,
  Notifications,
  Payments,
  PeopleAlt,
  Psychology,
  Receipt,
  Security,
  Settings,
  SmartToy,
  Support,
  TheaterComedy,
  Timeline,
} from '@mui/icons-material';

export default [
  {
    icon: Dashboard,
    name: 'Dashboard',
    route: '/dashboard',
  },
  {
    icon: PeopleAlt,
    name: 'User Management',
    route: '/user-management',
    children: [
      {
        // icon: Psychology,
        name: 'Manage Specialists',
        route: '/user-management/specialists',
      },
      {
        // icon: MedicalServices,
        name: 'Manage Patients',
        route: '/user-management/patients',
      },
      {
        // icon: AdminIcon,
        name: 'Manage Sub-Admins',
        route: '/user-management/sub-admins',
      },
      {
        // icon: FamilyRestroom,
        name: 'Family & Support',
        route: '/user-management/family-support',
      },
    ],
  },
  {
    icon: Psychology,
    // name: displayManageTextInSideBar ? 'Sessions & Treatment Plans' : 'Sessions & Treatment Plans',
    name: 'Sessions & Treatment Plans',
    route: '/sessions-management',
    children: [
      {
        icon: Assignment,
        name: 'Sessions',
        route: '/sessions-management/sessions',
      },
      {
        icon: TheaterComedy,
        name: 'Therapy Sessions',
        route: '/sessions-management/therapy-sessions',
      },
      {
        icon: MedicalServices,
        name: 'Treatment Plans',
        route: '/sessions-management/treatment-plans',
      },
      {
        icon: SmartToy,
        name: 'AI Treatment Plans',
        route: '/sessions-management/ai-treatment-plans',
      },
      {
        icon: Timeline,
        name: 'Monitor Patient Progress',
        route: '/sessions-management/moniter-patient-progress',
      },
    ],
  },
  {
    icon: Payments,
    // name: displayManagementTextInSideBar ? 'Financial Management' : 'Financial Management',
    name: 'Financial Management',
    route: '/financial-management',
    children: [
      {
        icon: Receipt,
        name: 'Specialist Payout',
        route: '/financial-management/specialist-payout',
      },
      {
        icon: Payments,
        name: 'Patient Payout',
        route: '/financial-management/patient-payout',
      },
      {
        icon: Discount,
        name: 'Manage Discount',
        route: '/financial-management/manage-discount',
      },
      {
        icon: Assessment,
        name: 'Financial Report',
        route: '/financial-management/financial-report',
      },
    ],
  },
  {
    icon: Article,
    // name: displayManagementTextInSideBar ? 'Content Management' : 'Content Management',
    name: 'Content Management',
    route: '/manage-content',
    children: [
      // {
      //   icon: Article,
      //   name: 'Content',
      //   route: '/manage-content/content',
      // },
      {
        icon: Assignment,
        name: 'Education Resources',
        route: '/manage-content/manage-eduaction-resources',
      },
      {
        icon: Group,
        name: 'Support Groups',
        route: '/manage-content/support-group',
      },
    ],
  },
  {
    icon: Settings,
    // name: displayManagementTextInSideBar ? 'Platform Settings' : 'Platform Settings',
    name:'Platform Settings',
    route: '/platform-settings',
    children: [
      {
        icon: Language,
        name: 'Language Settings',
        route: '/platform-settings/language-settings',
      },
      {
        icon: Security,
        name: 'Security',
        route: '/platform-settings/security',
      },
      {
        icon: Support,
        name: 'Emergency Support',
        route: '/platform-settings/emergency-support',
      },
    ],
  },
  {
    icon: Notifications,
    // name: displayManagementTextInSideBar ? 'Notification Management' : 'Notification',
    name:'Notification Management',
    route: '/notification-management',
  },
  {
    icon: Feed,
    // name: displayManageTextInSideBar ? 'Manage CMS' : 'CMS',
    name:'CMS',
    route: '/manage-cms',
  },
  {
    icon: Help,
    // name: displayManageTextInSideBar ? 'Manage FAQ' : 'FAQ',
    name:'FAQ',
    route: '/manage-faq',
  },
];
