import NoteDetails from '../components/NoteDetails';
import Notes from '../components/Notes';
import NewNote from '../components/NewNote';

export const routes = [
  {
    path: '/',
    components: { default: Notes, a: NewNote }
  },
  {
    path: '/details/:id',
    component: NoteDetails
  }
];
