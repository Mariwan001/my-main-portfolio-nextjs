import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import SectionTitle from '../../blocks/section.title.block';
import Icon from '../../utils/icon.util';
import css from '../../../styles/sections/articles/recent.module.scss';

export default function Recent({ mediumArticles = {} }) {
  // Destructure and provide default values to avoid undefined errors
  const { feed = {}, items = [] } = mediumArticles;
  
  return (
    <Section classProp="borderBottom">
      <Container spacing={'verticalXXXXLrg'}>
        <SectionTitle
          title="Recent Articles"
          preTitle="Informative"
          subTitle="A personal quest to become a better creative writer."
        />
        <section className={css.projects}>
          {items.length > 0 ? (
            items.map(({ title, pubDate, link, author, thumbnail, categories = [] }, index) => {
              const date = new Date(pubDate).toDateString();
              return (
                <article key={index} className={css.project}>
                  <span className={css.featuredImage}>
                    <Image
                      src={thumbnail || '/default-thumbnail.jpg'} // Fallback image if thumbnail is not provided
                      alt="Article thumbnail"
                      layout="responsive"
                      width={600}  // Adjust width as needed
                      height={400} // Adjust height as needed
                    />
                  </span>
                  <span className={css.header}>
                    <a href={link} rel="noopener noreferrer" target="_blank">
                      {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                    </a>
                  </span>
                  <span className={css.descriptionContainer}>
                    {/* Add description or any additional information here if needed */}
                  </span>
                  <span className={css.details}>
                    <p>By {author}</p>
                    <p className={css.pushedAt}>{date}</p>
                  </span>
                  <span className={css.topicsContainer}>
                    {categories.length > 0 ? (
                      categories.map((category, index) => (
                        <span key={index} className={css.topics}>
                          <Icon icon={['fab', 'medium']} /> {category}
                        </span>
                      ))
                    ) : (
                      <span>No categories available</span> // Fallback if no categories
                    )}
                  </span>
                </article>
              );
            })
          ) : (
            <p>No articles available</p> // Fallback if no articles
          )}
        </section>
      </Container>
    </Section>
  );
}
