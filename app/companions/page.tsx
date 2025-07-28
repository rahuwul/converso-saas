import CompanionCard from "@/components/CompanionCard";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import SearchFilter from "@/components/SearchFilter";
import SearchInput from "@/components/SearchInput";

async function CompanionsLibrary({ searchParams }: SearchParams) {
  const filters = await searchParams;

  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({ subject, topic });

  

  return (
    <main>
      <section>
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SearchFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id} {...companion}
            color={getSubjectColor(companion.subject)} />
        ))}
      </section>
    </main>
  );
}

export default CompanionsLibrary;