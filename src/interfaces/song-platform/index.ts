import { SongInterface } from 'interfaces/song';
import { PlatformInterface } from 'interfaces/platform';
import { GetQueryInterface } from 'interfaces';

export interface SongPlatformInterface {
  id?: string;
  song_id: string;
  platform_id: string;
  created_at?: any;
  updated_at?: any;

  song?: SongInterface;
  platform?: PlatformInterface;
  _count?: {};
}

export interface SongPlatformGetQueryInterface extends GetQueryInterface {
  id?: string;
  song_id?: string;
  platform_id?: string;
}
