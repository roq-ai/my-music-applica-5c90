import { ShareLinkInterface } from 'interfaces/share-link';
import { SongPlatformInterface } from 'interfaces/song-platform';
import { ProviderInterface } from 'interfaces/provider';
import { GetQueryInterface } from 'interfaces';

export interface SongInterface {
  id?: string;
  title: string;
  artist: string;
  genre: string;
  release_date: any;
  provider_id?: string;
  created_at?: any;
  updated_at?: any;
  share_link?: ShareLinkInterface[];
  song_platform?: SongPlatformInterface[];
  provider?: ProviderInterface;
  _count?: {
    share_link?: number;
    song_platform?: number;
  };
}

export interface SongGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  artist?: string;
  genre?: string;
  provider_id?: string;
}
