export interface Category {
  attributes: CategoryAttributes;
}

interface CategoryAttributes {
  "im:id": string;
  label: PurpleLabel;
  scheme: string;
  term: PurpleLabel;
}

enum PurpleLabel {
  Music = "Music",
  MusicCommentary = "Music Commentary",
  MusicHistory = "Music History",
  MusicInterviews = "Music Interviews",
}
