import NoteDetails from '../components/NoteDetails';
import Notes from '../components/Notes';

export const routes = [
  {
    path: '/',
    component: Notes
  },
  {
    path: '/details/:id',
    component: NoteDetails
  }
];
