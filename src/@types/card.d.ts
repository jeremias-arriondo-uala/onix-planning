export type PointCardProps = {
  value: number;
};

export type CardProps = {};

export type ListCardsProps = {
  cantCards?: number;
};

export interface UserStory {
  id: string;
  key: string;
  self?: string;
  fields: Fields;
}

type Fields = {
  summary?: string;
  description?: string;
  status?: {
    name: string;
  };
  storyPoint?: number;
};

// Example:
// {
//   "id": "12345",
//   "key": "PROJECT-123",
//   "self": "https://your-domain.atlassian.net/rest/api/2/issue/PROJECT-123",
//   "fields": {
//       "summary": "As a user, I want to be able to search for products on the website",
//       "description": "As a user, I want to be able to search for products on the website so that I can find what I'm looking for quickly and easily.",
//       "issuetype": {
//           "name": "User Story"
//       },
//       "status": {
//           "name": "To Do"
//       },
//       "assignee": {
//           "name": "John Smith"
//       },
//       "priority": {
//           "name": "High"
//       },
//       "labels": [
//           "search",
//           "website",
//           "user story"
//       ],
//       "customfield_10001": {
//           "value": "Shopping Cart"
//       },
//       "customfield_10002": "2022-01-01",
//       "customfield_10003": [
//           {
//               "value": "Mobile",
//               "child": [
//                   {
//                       "value": "Android"
//                   },
//                   {
//                       "value": "iOS"
//                   }
//               ]
//           }
//       ]
//   }
// }
