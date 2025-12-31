# Copilot Instructions for React E-commerce App

## Architecture Overview
This is a React-based e-commerce application for fashion/clothing items, bootstrapped with Create React App. It uses Firebase for authentication and Firestore for user data storage.

- **Routing**: Nested routes with React Router v6. `Navigation` component serves as layout with `Outlet` for child routes.
- **Components**: Functional components in `src/components/`, organized by feature (e.g., `category/category-item/`). Styles use SCSS with component-specific files.
- **Data Flow**: Categories are hardcoded in `App.js` and passed as props. Firebase auth creates user documents in Firestore.
- **State Management**: Currently prop-based; no global state library yet.

## Key Patterns
- **Component Structure**: Use functional components with props destructuring. Example: `const CategoryList = ({category}) => { const {title, backgroundImage} = category; ... }`
- **Firebase Integration**: Auth functions in `src/utils/firebase/firebase.utils.js`. Use `signInWithGooglePopup` and `createUserDocumentFromGoogleAuth` for user sign-in.
- **Styling**: Each component has its own `.styles.scss` file. Import in component files.
- **File Naming**: Components use `.component.jsx`, routes use `.component.routes.jsx`, styles use `.styles.scss`.

## Developer Workflows
- **Start Dev Server**: `npm start` (runs on http://localhost:3000)
- **Build**: `npm run build` (outputs to `build/` folder)
- **Test**: `npm test` (Jest with React Testing Library)
- **Firebase Config**: API keys in `firebase.utils.js` - ensure secure handling in production.

## Conventions
- **Imports**: Relative paths for components/routes, absolute for utils (e.g., `import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"`)
- **Async Operations**: Use async/await for Firebase calls, handle errors with try/catch.
- **Props**: Pass data down through props; destructure in components.
- **SVG Assets**: Use `ReactComponent as AppLogo` for SVG imports from `src/assets/`.

## Integration Points
- **Firebase Auth**: Google sign-in creates user docs with `displayName`, `email`, `createdAt`.
- **Firestore**: User collection stores auth data; extend for products/orders as needed.
- **External Images**: Category images from external URLs (e.g., i.ibb.co).

Reference: `src/App.js` for route setup, `src/routes/navigation/navigation.component.routes.jsx` for layout pattern, `src/utils/firebase/firebase.utils.js` for Firebase usage.</content>
<parameter name="filePath">/Users/kiranrai/Desktop/My Personal/projects/02100-reactjs/.github/copilot-instructions.md