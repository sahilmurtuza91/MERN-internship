const SubAdminsData = [
  {
    id: 1,
    name: "John Doe",
    phoneNo: "+1 555-123-4567",
    email: "johndoe@example.com",
    status: "Active",
    role: "Manager",
    image: "../../public/static/images/maleAdmin.jpg",
    permissions: {
      userManagement: {
        addEdit: true,
        view: true,
        delete: true,
      },
      reports: {
        addEdit: true,
        view: true,
        delete: false,
      },
      settings: {
        addEdit: true,
        view: true,
        delete: false,
      },
    },
  },
  {
    id: 2,
    name: "Michael Smith",
    phoneNo: "+1 555-987-6543",
    email: "michaelsmith@example.com",
    status: "Active",
    role: "Coordinator",
    image:"../../public/static/images/femaleAdmin.jpg",
    permissions: {
      userManagement: {
        addEdit: true,
        view: true,
        delete: false,
      },
      reports: {
        addEdit: false,
        view: true,
        delete: false,
      },
      settings: {
        addEdit: true,
        view: true,
        delete: false,
      },
    },
  },
];
export default SubAdminsData;