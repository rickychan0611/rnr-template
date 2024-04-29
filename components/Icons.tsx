import {
  Info,
  LucideIcon,
  MoonStar,
  Sun,
  Home,
  ScrollText,
  Blocks,
  LogIn,
  Globe,
  ArrowLeft,
  UserRound 
} from 'lucide-react-native';
import { cssInterop } from 'nativewind';

function interopIcon(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

interopIcon(Info);
interopIcon(MoonStar);
interopIcon(Sun);
interopIcon(Home);
interopIcon(ScrollText);
interopIcon(Blocks);
interopIcon(LogIn);
interopIcon(Globe);
interopIcon(ArrowLeft);
interopIcon(UserRound);

export {
  Info,
  MoonStar,
  Sun,
  Home,
  ScrollText,
  Blocks,
  LogIn,
  Globe,
  ArrowLeft,
  UserRound 
};
