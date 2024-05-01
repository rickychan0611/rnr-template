import {cssInterop} from 'nativewind'
import { Image } from 'expo-image';
import * as LucideIcons from 'lucide-react-native';

cssInterop(Image, { className: "style" });

function interopIcon(icon: any) {
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

Object.values(LucideIcons).forEach(icon => interopIcon(icon));

