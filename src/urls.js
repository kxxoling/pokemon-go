import TrainerProfile from './views/TrainerProfile';
import Friends from './views/Friends';
import Pokedex from './views/Pokedex';
import GlobalMap from './views/GlobalMap';
import TeamStandings from './views/TeamStandings';
import Missions from './views/Missions';
import MeetupEvents from './views/MeetupEvents';
import PokemonTv from './views/PokemonTv';
import PokemonDetails from './views/pokemonDetails';

export default {
  '/profile': {
    component: TrainerProfile,
    name: 'profile',
  },
  '/friends': {
    component: Friends,
    name: 'friends',
  },
  '/pokedex': {
    component: Pokedex,
    name: 'pokedex',
    subRoutes: {
      '/:pokemonId': {
        component: PokemonDetails,
        name: 'pokemonDetails',
      },
    },
  },
  '/map': {
    component: GlobalMap,
    name: 'map',
  },
  '/teams': {
    component: TeamStandings,
    name: 'teams',
  },
  '/missions': {
    component: Missions,
    name: 'missions',
  },
  '/meetups': {
    component: MeetupEvents,
    name: 'meetups',
  },
  '/tv': {
    component: PokemonTv,
    name: 'tv',
  },
};
