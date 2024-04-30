import * as LucideIcons from 'lucide-react-native';
import { cssInterop } from 'nativewind';

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

export * from 'lucide-react-native'
