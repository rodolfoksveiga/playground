from django.utils.translation import gettext_lazy as _
from django.db.models import (
    CASCADE,
    Model,
    DateTimeField,
    CharField,
    TextField,
    ForeignKey,
    BooleanField
)

from posts.models import Post
from users.models import User

class Comment(Model):
    modified_at = DateTimeField(
        _('Modified at'),
        auto_now=True
    )
    comment = TextField(
        _('Comment')
    )
    post = ForeignKey(
        Post,
        on_delete=CASCADE,
        related_name='comments'
    )
    deleted = BooleanField(
        _('Deleted'),
        default=False
    )
    user = ForeignKey(
        User,
        on_delete=CASCADE,
        related_name='comments'
    )

    def __str__(self):
        return 'Comment {} by {}'.format(self.comment, self.user.username)

