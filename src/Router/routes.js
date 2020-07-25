import NoteDetails from '../components/NoteDetails';
import Notes from '../components/Notes';
import NewNote from '../components/NewNote';

export const routes = [
  {
    path: '/vue-notes-app/',
    components: { default: Notes, add: NewNote }
  },
  {
    path: '/details/:id',
    component: NoteDetails
  },
];
