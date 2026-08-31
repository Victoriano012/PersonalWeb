/** Subsection heading shared by the Experience and Research sections. */
export default function SubgroupHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
      {children}
    </h3>
  );
}
