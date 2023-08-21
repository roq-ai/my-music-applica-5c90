import { SongInterface } from 'interfaces/song';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ShareLinkInterface {
  id?: string;
  song_id: string;
  user_id: string;
  link: string;
  created_at?: any;
  updated_at?: any;

  song?: SongInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ShareLinkGetQueryInterface extends GetQueryInterface {
  id?: string;
  song_id?: string;
  user_id?: string;
  link?: string;
}
