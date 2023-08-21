import * as yup from 'yup';

export const songPlatformValidationSchema = yup.object().shape({
  song_id: yup.string().nullable().required(),
  platform_id: yup.string().nullable().required(),
});
