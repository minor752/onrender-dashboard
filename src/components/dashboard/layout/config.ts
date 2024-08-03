import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'create-project', title: 'Loyiha yaratish', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'my-projects', title: 'Mening loyihalarim', href: paths.dashboard.customers, icon: 'users' },
  { key: 'all-projects', title: 'Barcha loyihalar', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  // { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
