"""empty message

Revision ID: 3b3299aeae24
Revises: 67d622438457
Create Date: 2021-05-30 17:18:25.118903

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3b3299aeae24'
down_revision = '67d622438457'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('academics',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('act', sa.Integer(), nullable=True),
    sa.Column('gpa', sa.Float(), nullable=True),
    sa.Column('sat', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id')
    )
    op.create_table('role',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['role.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    op.add_column('coach', sa.Column('user_id', sa.Integer(), nullable=True))
    op.add_column('coach', sa.Column('role_id', sa.Integer(), nullable=True))
    op.drop_constraint('coach_coachId_key', 'coach', type_='unique')
    op.drop_constraint('coach_id_key', 'coach', type_='unique')
    op.create_foreign_key(None, 'coach', 'role', ['role_id'], ['id'])
    op.create_foreign_key(None, 'coach', 'user', ['user_id'], ['id'])
    op.drop_column('coach', 'coachId')
    op.drop_column('coach', 'players')
    op.drop_column('coach', 'role')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('coach', sa.Column('role', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('coach', sa.Column('players', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.add_column('coach', sa.Column('coachId', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'coach', type_='foreignkey')
    op.drop_constraint(None, 'coach', type_='foreignkey')
    op.create_unique_constraint('coach_id_key', 'coach', ['id'])
    op.create_unique_constraint('coach_coachId_key', 'coach', ['coachId'])
    op.drop_column('coach', 'role_id')
    op.drop_column('coach', 'user_id')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.drop_table('user')
    op.drop_table('role')
    op.drop_table('academics')
    # ### end Alembic commands ###