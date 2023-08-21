import * as yup from 'yup';

export const shareLinkValidationSchema = yup.object().shape({
  link: yup.string().required(),
  song_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
