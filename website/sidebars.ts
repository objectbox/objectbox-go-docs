import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    // Main documentation sections with custom labels
    {
      type: 'doc',
      id: 'README',
      label: 'Golang Database',
    },
    {
      type: 'doc',
      id: 'install',
      label: 'Installation',
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Get started on-the-go',
    },
    {
      type: 'doc',
      id: 'transactions',
      label: 'Transactions',
    },
    {
      type: 'doc',
      id: 'entity-annotations',
      label: 'Entity Annotations',
    },
    {
      type: 'doc',
      id: 'queries',
      label: 'Queries',
    },
    {
      type: 'doc',
      id: 'schema-changes',
      label: 'Schema changes',
    },
    {
      type: 'doc',
      id: 'custom-types',
      label: 'Custom types',
    },
    {
      type: 'doc',
      id: 'relations',
      label: 'Relations',
    },

    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },

    // --- Separator and External Links Section ---
    {
      type: 'html',
      value: '<hr class="sidebar-divider" />', // Light grey line separator
    },
    // External link to Data Sync
    {
      type: 'link',
      label: 'Data Sync',
      href: 'https://objectbox.io/sync/',
    },
    
    'faq',              // FAQ
    
    // External links at the bottom
    {
      type: 'link',
      label: 'ObjectBox Golang',
      href: 'https://pkg.go.dev/github.com/objectbox/objectbox-go/objectbox',
    },
    {
      type: 'link',
      label: 'ObjectBox C/C++ Docs',
      href: 'https://cpp.objectbox.io/',
    },
  ],
};

export default sidebars;
