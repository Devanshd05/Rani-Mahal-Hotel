import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-28 md:py-36 bg-[#F7F4EE] text-center">
      <Container size="narrow">
        <div className="mb-6 flex justify-center">
          <img
            src="/pictures/newlogo.png"
            alt="Hotel Rani Mahal"
            className="h-20 w-auto object-contain"
          />
        </div>
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C69A63] block mb-2">
          Error 404
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#252824] font-normal mb-4">
          Chamber Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#686868] max-w-md mx-auto mb-8 font-light leading-relaxed">
          The heritage corridor or page you are searching for does not exist or may have been moved to another wing of the palace.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="gold" size="lg">
            Return to Grand Courtyard
          </Button>
          <Button to="/rooms" variant="outline" size="lg">
            View Royal Suites
          </Button>
        </div>
      </Container>
    </div>
  );
};
