import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PublicIcon from '@mui/icons-material/Public';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';

const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon/>,
        label: 'Authentication',
        route: 'authentication',
    },
    {
        id: 1,
        icon: <StorageIcon/>,
        label: 'Database',
        route: 'database',
    },
    {
        id: 2,
        icon: <SettingsSystemDaydreamIcon/>,
        label: 'Storage',
        route: 'storage',
    },
    {
        id: 3,
        icon: <PublicIcon/>,
        label: 'Hosting',
        route: 'hosting',
    },
    {
        id: 4,
        icon: <DnsIcon/>,
        label: 'Functions',
        route: 'functions',
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon/>,
        label: 'Machine learning',
        route: 'machine-learning',
    },
]
export default  mainNavbarItems;