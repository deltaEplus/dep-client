import BuildingType from '../components/Forms/BuildingType';
import Complete from '../components/Forms/Complete';
import EnergyCost from '../components/Forms/EnergyCost';
import FloorArea from '../components/Forms/FloorArea';
import UserDetails from '../components/Forms/UserDetails';
import ZipCode from '../components/Forms/ZipCode';

export const steps = [{
  title: 'User Details',
  content: UserDetails
},
{
  title: 'Zip Code',
  content: ZipCode
},
{
  title: 'Floor Area',
  content: FloorArea
},
{
  title: 'Building Type',
  content: BuildingType
},
{
  title: 'Annual Energy Cost',
  content: EnergyCost
},
{
  title: 'Complete',
  content: Complete
}
];
