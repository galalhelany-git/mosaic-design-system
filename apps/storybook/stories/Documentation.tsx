import type { ReactNode } from 'react';

export type DocumentationStatus =
  'Implemented' | 'Needs Design Decision' | 'Needs Engineering Review' | 'Planned' | 'Ready';

export function DocPage({
  children,
  description,
  eyebrow,
  title,
}: {
  children: ReactNode;
  description: ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <main className="docs-page">
      <header className="docs-hero">
        <span className="docs-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <div className="docs-lede">{description}</div>
      </header>
      {children}
    </main>
  );
}

export function DocSection({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className="docs-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="docs-card-grid">{children}</div>;
}

export function DocCard({ children, title }: { children: ReactNode; title: string }) {
  return (
    <article className="docs-card">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export function Status({ children }: { children: ReactNode }) {
  const label = String(children);
  return (
    <span className={`docs-status docs-status--${label.toLowerCase().replaceAll(' ', '-')}`}>
      {children}
    </span>
  );
}

export function Callout({
  children,
  title,
  tone = 'info',
}: {
  children: ReactNode;
  title: string;
  tone?: 'caution' | 'info' | 'success';
}) {
  return (
    <aside className={`docs-callout docs-callout--${tone}`}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

export function StatusTable({
  rows,
}: {
  rows: Array<{ detail: ReactNode; name: string; status: DocumentationStatus }>;
}) {
  return (
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Status</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td>
                <Status>{row.status}</Status>
              </td>
              <td>{row.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="docs-code">
      <code>{children}</code>
    </pre>
  );
}
