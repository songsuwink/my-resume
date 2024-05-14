import ITStockImg from './ITStock/images/3.PNG';
import QAInspectorImg from './QAInspector/images/Capture1.png';
import PPEStockImg from './PPEStock/images/Capture2.PNG';
import OKRSImg from './Okrs/images/okrs1.png';
import AntUniImg from './AntUni/images/aniuni1.png';
import DWCImg from './DWC/images/dwc2.png';
import HNYImg from './HNY/images/hny2.jpeg';
import JTAImg from './JTARevision/images/jta1.png';
import EmpProfileImg from './EmpProfile/images/image1.png';
import FamilyImg from './FamilyDay/images/familyDay2.png';

const portList = [
  {
    id: 1,
    name: 'IT Stock',
    desc: 'Web application for IT Stock management',
    img: ITStockImg,
    route: '/itstock-info',
    tag1: 'ASP.NET MVC',
    tag2: '',
  },
  {
    id: 2,
    name: 'QA Inspector',
    desc: 'Web application for QA to be used in the examination of employees in the production line',
    img: QAInspectorImg,
    route: '/qainspector-info',
    tag1: 'ASP.NET MVC',
    tag2: '',
  },
  {
    id: 3,
    name: 'PPE Stock',
    desc: 'Web application for Safety Stock management',
    img: PPEStockImg,
    route: '/ppestock-info',
    tag1: 'ASP.NET MVC',
    tag2: '',
  },
  {
    id: 4,
    name: 'OKRs',
    desc: `Objectives and Key Results. It's a goal-setting framework used by individuals, teams, and organizations to define clear, measurable goals and track their progress`,
    img: OKRSImg,
    route: '/okrs-info',
    tag1: 'React',
    tag2: 'Javascript',
  },
  {
    id: 5,
    name: 'AntHR & UniHR',
    desc: 'Web application for HR management, Adding, editing employee information and managing HR information',
    img: AntUniImg,
    route: '/antUni-info',
    tag1: 'React',
    tag2: 'Javascript',
  },
  {
    id: 6,
    name: 'JTA Revision',
    desc: `Regulations for working in various positions can be searched by job title or employee name`,
    img: JTAImg,
    route: '/jtaRevision-info',
    tag1: 'React',
    tag2: 'Javascript',
  },
  {
    id: 7,
    name: 'Employee Profile',
    desc: 'Displaying JTA information and employee training information allows managers to view the department or employees',
    img: EmpProfileImg,
    route: '/empProfile-info',
    tag1: 'React',
    tag2: 'Javascript',
  },
  {
    id: 8,
    name: 'Dream Work Camp',
    desc: 'Web application for the Dream Work Camp Event, used for booking hotel rooms, group activities, and sharing photos',
    img: DWCImg,
    route: '/dwc-info',
    tag1: 'React',
    tag2: 'Javascript',
  },
  {
    id: 9,
    name: 'Happy New Year',
    desc: 'Web application for Happy new year Event, used for completing surveys and giving out prizes to employees',
    img: HNYImg,
    route: '/hny-info',
    tag1: 'React',
    tag2: 'Javascript',
  },
  {
    id: 10,
    name: 'Family Day',
    desc: 'Web application for Family day Event, used for registering to participate in activities Schedule activities and photo sharing activities',
    img: FamilyImg,
    route: '/familyDay-info',
    tag1: 'React',
    tag2: 'Javascript',
  },
];

export default portList;
