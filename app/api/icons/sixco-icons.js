import React from 'react';
import {
  Home as HomeIcon,
  AirlineSeatReclineNormal as AirlineSeatReclineNormalIcon,
  LocalShipping as LocalShippingIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  People as PeopleIcon,
  CurrencyExchange as CurrencyExchangeIcon,
  Garage as GarageIcon,
  ExitToApp as ExitToAppIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const SixcoIcon = ({ iconName, className }) => {
  let IconComponent = null;

  switch (iconName) {
    case 'Home':
      IconComponent = HomeIcon;
      break;
    case 'AirlineSeatReclineNormal':
      IconComponent = AirlineSeatReclineNormalIcon;
      break;
    case 'LocalShipping':
      IconComponent = LocalShippingIcon;
      break;
    case 'AssignmentTurnedIn':
      IconComponent = AssignmentTurnedInIcon;
      break;
    case 'People':
      IconComponent = PeopleIcon;
      break;
    case 'CurrencyExchange':
      IconComponent = CurrencyExchangeIcon;
      break;
    case 'Garage':
      IconComponent = GarageIcon;
      break;
    case 'Person':
      IconComponent = PersonIcon;
      break;
    case 'ExitToApp':
      IconComponent = ExitToAppIcon;
      break;
    default:
      return null;
  }

  return (
    <IconComponent className={className} />
  );
};

export default SixcoIcon;