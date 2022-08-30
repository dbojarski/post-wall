import { Widget } from '../widget/Widget';
import { TagsItem, TagsList, TagsNew } from './TagsWidget.styles';

export function TagsWidget() {
  const tags = [
    { name: 'heheszki', new: 5 },
    { name: 'memy', new: 0 },
    { name: 'astrologia', new: 11 },
  ];

  return (
    <Widget title='Popular tags'>
      <TagsList>
        {tags.map((tag) => (
          <TagsItem key={tag.name}>
            <span>{tag.name}</span>
            {tag.new > 0 && <TagsNew>{tag.new}</TagsNew>}
          </TagsItem>
        ))}
      </TagsList>
    </Widget>
  );
}
