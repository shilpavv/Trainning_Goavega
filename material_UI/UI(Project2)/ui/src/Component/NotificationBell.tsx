import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function NotificationBell({iconColor,badgeContent}:any) {
  return (
    <div>
        <Tooltip title="you have 3 Notifications">
        <IconButton color={iconColor}>
        <Badge
                        badgeContent={badgeContent}
                        color="error"
                    >
                        <NotificationsIcon />
                    </Badge>
        </IconButton>
        </Tooltip>
    </div>
  )
}

export default NotificationBell
