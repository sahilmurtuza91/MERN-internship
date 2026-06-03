const adminRole = [
  {
    id: 1,
    roleName: "Administrator",
    status: "Active",
    permissions: {
      dashboard: {
        addEdit: true,
        view: true,
        delete: true,
      },
      userManagement: {
        addEdit: true,
        view: true,
        delete: true,
      },
      sessionsAndTreatmentPlans: {
        addEdit: true,
        view: true,
        delete: true,
      },
      financialManagement: {
        addEdit: true,
        view: true,
        delete: true,
      },
      contentManagement: {
        addEdit: true,
        view: true,
        delete: true,
      },
      platformSettings: {
        addEdit: true,
        view: true,
        delete: true,
      },
      notification: {
        addEdit: true,
        view: true,
        delete: true,
      },
      cms: {
        addEdit: true,
        view: true,
        delete: true,
      },
      faq: {
        addEdit: true,
        view: true,
        delete: true,
      },
    },
  },

  {
    id: 2,
    roleName: "Editor",
    status: "Active",
    permissions: {
      dashboard: {
        addEdit: true,
        view: true,
        delete: false,
      },
      userManagement: {
        addEdit: true,
        view: true,
        delete: false,
      },
      sessionsAndTreatmentPlans: {
        addEdit: true,
        view: true,
        delete: false,
      },
      financialManagement: {
        addEdit: false,
        view: true,
        delete: false,
      },
      contentManagement: {
        addEdit: true,
        view: true,
        delete: false,
      },
      platformSettings: {
        addEdit: false,
        view: true,
        delete: false,
      },
      notification: {
        addEdit: true,
        view: true,
        delete: false,
      },
      cms: {
        addEdit: true,
        view: true,
        delete: false,
      },
      faq: {
        addEdit: true,
        view: true,
        delete: false,
      },
    },
  },

  {
    id: 3,
    roleName: "Viewer",
    status: "Inactive",
    permissions: {
      dashboard: {
        addEdit: false,
        view: true,
        delete: false,
      },
      userManagement: {
        addEdit: false,
        view: true,
        delete: false,
      },
      sessionsAndTreatmentPlans: {
        addEdit: false,
        view: true,
        delete: false,
      },
      financialManagement: {
        addEdit: false,
        view: true,
        delete: false,
      },
      contentManagement: {
        addEdit: false,
        view: true,
        delete: false,
      },
      platformSettings: {
        addEdit: false,
        view: true,
        delete: false,
      },
      notification: {
        addEdit: false,
        view: true,
        delete: false,
      },
      cms: {
        addEdit: false,
        view: true,
        delete: false,
      },
      faq: {
        addEdit: false,
        view: true,
        delete: false,
      },
    },
  },
];
export default adminRole;