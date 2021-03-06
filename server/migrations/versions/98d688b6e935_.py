"""empty message

Revision ID: 98d688b6e935
Revises: 
Create Date: 2021-03-05 14:53:09.471583

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '98d688b6e935'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tweets',
    sa.Column('id', sa.BigInteger(), nullable=False),
    sa.Column('twitter_id', sa.BigInteger(), nullable=False),
    sa.Column('text', sa.String(length=280), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tweets')
    # ### end Alembic commands ###
