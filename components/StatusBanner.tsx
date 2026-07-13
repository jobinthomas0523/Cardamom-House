interface Props {
  state: string;
}

export default function StatusBanner({ state }: Props) {
  if (state !== "closed") return null;

  return (
    <section className="bg-red-50 border-y border-red-200 py-4">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-medium text-red-700">
          We're closed today.
        </p>

        <p className="text-red-600">
          We'll reopen tomorrow at 08:00.
        </p>
      </div>
    </section>
  );
}