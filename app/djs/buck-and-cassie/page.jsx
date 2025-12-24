export default function BuckAndCassiePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Show Hero */}
      <section className="mb-10">
        <img
          src="/images/reveille-and-coffee.jpg"
          alt="Reveille & Coffee Show"
          className="w-full rounded-xl shadow-lg"
        />
      </section>

      {/* Show Info */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Reveille & Coffee</h1>
        <p className="text-lg text-muted-foreground">
          Weekdays • 6:00 AM – 9:00 AM
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed">
          Start your morning with Buck & Cassie as they bring real conversation,
          veteran perspective, and grounded energy to ease into the day.
          Reveille & Coffee blends military culture with everyday life —
          familiar voices, zero fluff, and plenty of coffee.
        </p>
      </section>

      {/* Hosts */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Your Hosts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Buck */}
          <div className="text-center">
            <img
              src="/images/buck.jpg"
              alt="Buck"
              className="mx-auto rounded-xl shadow-md"
            />
            <h3 className="text-xl font-semibold mt-4">Buck</h3>
          </div>

          {/* Cassie */}
          <div className="text-center">
            <img
              src="/images/cassie.jpg"
              alt="Cassie"
              className="mx-auto rounded-xl shadow-md"
            />
            <h3 className="text-xl font-semibold mt-4">Cassie</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
